export const myFunc = (
  targetIndex: number,
  validRows: number[],
  errorRows: number[],
  action: "remove" | "add"
) => {
  const onUpdateValidRows = () => {
    const newValidRows = validRows.map((validRowIndex) => {
      if (validRowIndex > targetIndex) {
        if (action === "add") {
          return validRowIndex + 1;
        } else {
          return validRowIndex - 1;
        }
      } else {
        return validRowIndex;
      }
    });

    if (action === "add" && validRows.includes(targetIndex)) {
      return [...newValidRows, targetIndex + 1];
    } else if (action === "remove" && validRows.includes(targetIndex)) {
      return newValidRows.filter((entry) => entry !== targetIndex);
    } else {
      return newValidRows;
    }
  };

  const onUpdateErrorRows = () => {
    const newErrorRows = errorRows.map((errorRowIndex) => {
      if (errorRowIndex > targetIndex) {
        if (action === "add") {
          return errorRowIndex + 1;
        } else {
          return errorRowIndex - 1;
        }
      } else {
        return errorRowIndex;
      }
    });

    if (action === "add" && errorRows.includes(targetIndex)) {
      return [...newErrorRows, targetIndex + 1];
    } else if (action === "remove" && errorRows.includes(targetIndex)) {
      return newErrorRows.filter((entry) => entry !== targetIndex);
    } else {
      return newErrorRows;
    }
  };

  return {
    updatedValidRows: onUpdateValidRows(),
    updatedErrorRows: onUpdateErrorRows(),
  };
};
