export const dataSuffixer = (conntentToAppend, currentValue) => {
  const strData = currentValue;
  const strSplitData = strData.split('');
  const strSplitDataLength = strSplitData.length;
  const strReverseSplitData = strData.split('').reverse();
  const occuranceOfTag = strReverseSplitData.indexOf('<');
  const subSplitterIndex = strSplitDataLength - occuranceOfTag - 1;
  const appendedDynamicContent = strData.substring(0, subSplitterIndex) + ` &#36;&#123;${conntentToAppend}&#125;` + strData.substring(subSplitterIndex, strSplitDataLength);
  return appendedDynamicContent
};
