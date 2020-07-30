export const dataSuffixer = (conntentToAppend, currentValue) => {
  const strData = currentValue;
  const strSplitData = strData.split('');
  const strSplitDataLength = strSplitData.length;
  const strReverseSplitData = strData.split('').reverse();
  const occuranceOfTag = strReverseSplitData.indexOf('<');
  const subSplitterIndex = strSplitDataLength - occuranceOfTag - 1;
  const appendedDynamicContent = strData.substring(0, subSplitterIndex) + `${conntentToAppend}` + strData.substring(subSplitterIndex, strSplitDataLength);
  return appendedDynamicContent
};
