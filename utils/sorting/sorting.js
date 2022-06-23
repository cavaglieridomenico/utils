export const getSelectionSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    let minId = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minId]) {
        minId = j;
      }
    }
    let temp = list[minId];
    list[minId] = list[i];
    list[i] = temp;
  }
  return list;
};

export const getInsertionSort = (list) => {
  for (let i = 1; i < list.length; i++) {
    let key = list[i];
    let j = i - 1;

    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j = j - 1;
    }
    list[j + 1] = key;
  }
  return list;
};

export const getBubbleSort = (list) => {
  let changed;
  let temp;
  for (let i = 0; i < list.length - 1; i++) {
    changed = false;
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        changed = true;
      }
    }
    if (changed === false) break;
  }
  return list;
};

//Merge sorting
const setMerge = (list, l, m, r) => {
  let n1 = m - l + 1;
  let n2 = r - m;

  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) L[i] = list[l + i];
  for (let j = 0; j < n2; j++) R[j] = list[m + 1 + j];

  let i = 0;

  let j = 0;

  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      list[k] = L[i];
      i++;
    } else {
      list[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    list[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    list[k] = R[j];
    j++;
    k++;
  }
};

export const getMergeSort = (list, l, r) => {
  if (l >= r) {
    return;
  }
  let m = l + parseInt((r - l) / 2);
  getMergeSort(list, l, m);
  getMergeSort(list, m + 1, r);
  setMerge(list, l, m, r);
  return list;
};

//Quick sort
const getPartition = (list, low, high) => {
  let pivot = list[high];

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (list[j] < pivot) {
      i++;
      let temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
  }
  let temp = list[i + 1];
  list[i + 1] = list[high];
  list[high] = temp;
  return i + 1;
};

export const getQuickSort = (list, low, high) => {
  if (low < high) {
    let pi = getPartition(list, low, high);

    getQuickSort(list, low, pi - 1);
    getQuickSort(list, pi + 1, high);
    return list;
  }
};
