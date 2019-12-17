import "./registerServiceWorker";

/**
 * @param {Vue} Vue
 * @param {Vue.components} App Vue文件
 * @param {VueRouter} router vue路由
 * @param {String} mount 挂载元素
 */
const CreateEntryPoint = (Vue, App, router, mount = "#app") => {
  Vue.config.productionTip = false;
  return new Vue({
    router,
    render: h => h(App)
  }).$mount(mount);
};

export default CreateEntryPoint;
