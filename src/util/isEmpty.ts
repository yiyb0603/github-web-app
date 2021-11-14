const isEmpty = (value: any): boolean => {
  if (!value || value.length <= 0 || String(value).length <= 0) {
    return true;
  }

  return false;
}

export default isEmpty;