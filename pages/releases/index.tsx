import Grid from "@xcritical/grid";
import parse from "date-fns/parse";

import format from "date-fns/format";
import type { GetServerSideProps, NextPage } from "next";
import sortBy from "lodash.sortby";
import Head from "next/head";
import JiraService, {
  JiraIssueModel,
  JiraIssuesGroupedByVersionComponent,
} from "../../services/jira";

import styles from "../../styles/Home.module.css";
import { columns } from "../../utils/consts";
import {
  ContentWrapper,
  GridInner,
  GridWrapper,
} from "../../components/styled";
import { uniqBy } from "../../utils";
import { useMemo, useState } from "react";
import Checkbox from "@xcritical/checkbox";
import cache from "../../utils/cache";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let components: string[] = [];
  if (query["component"]) {
    components = Array.isArray(query["component"])
      ? query["component"]
      : query["component"].split(",");
  }
  const cacheKey = `release_${components.join("_")}`;
  let versions = cache.get<JiraIssuesGroupedByVersionComponent>(
    `release_${components.join("_")}`
  );
  if (versions == undefined) {
    versions = await JiraService.issuesByComponent(components, true);
    cache.set(cacheKey, versions, 300);
  }

  return {
    props: {
      versions,
    },
  };
};

const formatKeyDate = (date: string | undefined) => {
  return date
    ? format(parse(date, "dd/LLL/yy", new Date()), "yyyy-MM-dd")
    : "No release date";
};

const formatDate = (date: string) => {
  try {
    return format(parse(date, "yyyy-MM-dd", new Date()), "dd MMMM yyyy, EEEE");
  } catch (error) {
    return "No release date";
  }
};

const groupIssues = (
  issue: JiraIssueModel[],
  withImplements: boolean = true,
  withPDR: boolean = true
): Record<string, JiraIssueModel[]> => {
  return sortBy(uniqBy(issue, "key"), (i) => i.version?.fullName).reduce<
    Record<string, JiraIssueModel[]>
  >((acc, item) => {
    const releaseDate = formatKeyDate(item.version?.userReleaseDate);
    if (!acc[releaseDate]) {
      acc[releaseDate] = [];
    }

    const isPDR = withPDR && !item.version?.userReleaseDate;
    const foundedParent = acc[releaseDate].find(
      ({ id }) => id === item.parentId
    );
    if (foundedParent) {
      if (!foundedParent.children) foundedParent.children = [];

      foundedParent.children.push({ ...item });
    } else if (withPDR && !item.version?.userReleaseDate) {
      return acc;
    } else if (withImplements && !item.linkedIssues["implements"]?.length) {
      return acc;
    } else acc[releaseDate].push({ ...item });
    return acc;
  }, {});
};

const Releases: NextPage<{ versions: JiraIssuesGroupedByVersionComponent }> = ({
  versions,
}) => {
  const [checked, setChecked] = useState(true);
  const [checkedPDR, setCheckedPDR] = useState(true);
  const issues = useMemo(() => {
    const items = groupIssues(
      Object.values(versions).flat(),
      checked,
      checkedPDR
    );
    Object.entries(items).forEach(([date]) => {
      if (!items[date].length) delete items[date];
    });
    return items;
  }, [versions, checked, checkedPDR]);
  const components = Object.keys(versions);
  return (
    <div className={styles.container}>
      <Head>
        <title>Jira Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWrapper>
        <GridWrapper>
          <h1>
            {components.length > 4
              ? `${components.length} components`
              : components.join(", ")}
          </h1>
          <Checkbox
            checked={checked}
            appearance="checkbox"
            onChange={setChecked}
            label="Only with Implements"
          />
          <Checkbox
            checked={checkedPDR}
            appearance="checkbox"
            onChange={setCheckedPDR}
            label="Only with PDR"
          />
          {Object.entries(issues)
            .sort(([date], [dateNext]) => (date < dateNext ? -1 : 1))
            .map(([date, issueList]) => (
              <>
                <h2 key={`h2_${date}`}>{formatDate(date)}</h2>
                <GridInner
                  key={`gridi_${date}`}
                  height={issueList.length * 37 + 37}
                >
                  <Grid
                    key={`grid_${date}`}
                    rowHeight={37}
                    columns={columns}
                    items={issueList}
                    shouldFitContainer
                  />
                </GridInner>
              </>
            ))}
        </GridWrapper>
      </ContentWrapper>
    </div>
  );
};

export default Releases;
