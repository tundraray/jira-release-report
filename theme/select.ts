import {
  WHITE,
  PRIMARY,
  PRIMARY_HOVER,
  DEFAULT,
  DEFAULT_HOVER,
  DEFAULT_BORDER,
} from "./colors";
import { DEFAULT_BORDER_RADIUS } from "./sizes";

export { selectThemeNamespace } from "@xcritical/select";

const dropdownTheme = {
  button: {
    minWidth: 250,
    margin: "10px",
  },
  dropdown: {
    position: "relative",
    borderRadius: 0,
    boxShadow: `0 1px 0 ${DEFAULT_BORDER}, 0 -1px 0 ${DEFAULT_BORDER}`,
  },
  dropdownList: {
    borderRadius: 0,
  },
  option: {
    hover: {
      color: WHITE,
      background: PRIMARY_HOVER,
    },
    active: {
      color: WHITE,
      background: PRIMARY_HOVER,
    },
    focus: {
      color: WHITE,
      background: PRIMARY_HOVER,
    },
    selected: {
      color: WHITE,
      background: PRIMARY,
    },
  },
};

const filtersValueSelect = {
  option: dropdownTheme.option,
};

const datePickerSelect = {
  button: {
    padding: 0,
    height: "100%",
    background: DEFAULT,
    borderColor: DEFAULT_BORDER,
    hover: {
      cursor: "pointer",
      background: DEFAULT_HOVER,
      borderColor: DEFAULT_BORDER,
    },
  },
  option: {
    padding: "5px 10px",
    display: "flex",
    justifyContent: "center",
  },
  dropdownList: {
    maxHeight: "200px",
    background: DEFAULT,
  },
  valueContainer: {
    display: "flex",
    fontWeight: "bold",
    justifyContent: "center",
    background: "transparent",
  },
  singleValue: {
    width: "auto",
  },
};

export const selectTheme = {
  width: "auto",
  appearance: {
    default: {
      background: "#fff",
      color: "#31394C",
      disabled: {
        background: "#fff",
        color: "#31394C",
        opacity: 0.65,
      },
      button: {
        padding: "5px 10px",
        borderColor: DEFAULT_BORDER,
        hover: {
          borderColor: PRIMARY,
        },
      },
      container: {
        width: "100%",
      },
      singleValue: {
        width: "100%",
        height: "auto",
      },
      multiValue: {
        background: DEFAULT,
        border: `1px solid ${DEFAULT_BORDER}`,
        borderRadius: DEFAULT_BORDER_RADIUS,
        hover: {
          background: DEFAULT_HOVER,
        },
      },
      multiValueLabel: {
        fontSize: "84%",
        padding: "0 3px",
      },
      multiValueRemove: {
        marginTop: 0,
      },
      valueContainer: {
        padding: 0,
      },
      indicatorsContainer: {
        height: "18px",
      },
      dropdownIndicator: {
        padding: "0 0 0 5px",
      },
      dropdown: {
        zIndex: "9999",
      },
      option: dropdownTheme.option,
      groupHeading: {
        padding: 0,
        height: "40px",
        marginBottom: "0px",
      },
      group: {
        paddingBottom: "0px",
        paddingTop: "0px",
      },
    },
    "grouped-multi": {
      option: {
        hover: {
          color: "inherit",
          background: DEFAULT_HOVER,
        },
        active: {
          color: "inherit",
          background: DEFAULT_HOVER,
        },
        focus: {
          color: "inherit",
          background: DEFAULT_HOVER,
        },
        selected: {
          color: "inherit",
          background: "white",
        },
      },
    },
    fluid: {
      container: {
        width: "100%",
      },
    },
    dropdown: dropdownTheme,
    "filters-more": {
      ...dropdownTheme,
      valueContainer: {
        marginLeft: "10px",
      },
      indicatorsContainer: {
        alignSelf: "center",
      },
      dropdownList: {
        ...dropdownTheme.dropdownList,
        borderTop: `1px solid ${DEFAULT_BORDER}`,
        borderBottom: `1px solid ${DEFAULT_BORDER}`,
      },
    },
    compact: {
      button: {
        marginTop: "3px",
        padding: "0 5px 2px 5px",
      },
      singleValue: {
        height: "inherit",
        marginLeft: "2px",
        padding: "2px 0",
      },
      indicatorsContainer: {
        marginTop: "2px",
      },
      dropdownIndicator: {
        padding: "0 0 0 2px",
      },
    },
    "promo-form-environments": {
      container: {
        width: "250px",
        marginLeft: "30px",
      },
    },
    "date-picker-select-year": {
      container: {
        width: "40%",
        height: "30px",
        marginBottom: "5px",
      },
      ...datePickerSelect,
    },
    "date-picker-select-month": {
      container: {
        width: "60%",
        height: "30px",
        marginBottom: "5px",
      },
      ...datePickerSelect,
    },
    "filters-value-select": filtersValueSelect,
    "card-processing-setting": {
      ...dropdownTheme,
      disabled: {
        background: "#fff",
        color: "#31394C",
        opacity: 0.85,
      },
      container: {
        width: "100%",
      },
      singleValue: {
        width: "100%",
        height: "auto",
      },
      indicatorSeparator: {
        display: "none",
      },
      indicatorsContainer: {
        display: "none",
      },
      button: {
        padding: "5px 10px",
        borderColor: DEFAULT_BORDER,
        hover: {
          borderColor: PRIMARY,
        },
        minHeight: 30,
      },
      dropdownList: {
        ...dropdownTheme.dropdownList,
        border: `1px solid ${DEFAULT_BORDER}`,
        position: "absolute",
      },
      dropdown: {
        ...dropdownTheme.dropdown,
        position: "absolute",
      },
      multiValue: {
        background: DEFAULT,
        border: `1px solid ${DEFAULT_BORDER}`,
        borderRadius: 10,
        hover: {
          background: DEFAULT_HOVER,
        },
      },
      multiValueLabel: {
        fontSize: "84%",
        padding: "0 3px",
      },
    },
    "card-processor-select": {
      ...dropdownTheme,
      container: {
        width: 80,
        marginRight: 5,
      },
      button: {
        minWidth: 80,
      },
      indicatorSeparator: {
        display: "none",
      },
      dropdown: {
        ...dropdownTheme.dropdown,
        position: "absolute",
        border: `1px solid ${DEFAULT_BORDER}`,
        wordBreak: "break-word",
      },
    },
    "amount-operator-select": {
      ...dropdownTheme,
      container: {
        width: 60,
      },
      button: {
        minWidth: 60,
        marginRight: 5,
      },
      indicatorSeparator: {
        display: "none",
      },
      dropdown: {
        ...dropdownTheme.dropdown,
        position: "absolute",
        border: `1px solid ${DEFAULT_BORDER}`,
      },
    },
  },
};
