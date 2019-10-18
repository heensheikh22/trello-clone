

export const getTaskboardState = store => store.taskboards;

export const getTaskboard = store =>
  getTaskboardList(store).map(id => getTaskboardById(store, id));

export const getTaskboardList = store =>
    getTaskboardState(store) ? getTaskboardState(store).allIds : [];

export const getTaskboardById = (store, id) =>
    getTaskboardState(store) ? { ...getTaskboardState(store).byIds[id], id } : {};
