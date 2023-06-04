import type { App } from 'vue';
import ChuckCascader from "./ChuckCascader.vue"; // 引入封装好的组件
import ChuckSearch from "./ChuckSearch.vue";
import CheckBox from "./CheckBox.vue";
import RadioBox from "./RadioBox.vue";
 
export { ChuckCascader, ChuckSearch, CheckBox, RadioBox } //实现按需引入*

const components = [ ChuckCascader, ChuckSearch, CheckBox, RadioBox ];

const install = function(app: App) {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
export default { install } // 批量的引入*