// 配置：自定义的全局组件
import icon from '@/components/common/icon'; // 字体图标

export default{
    install(Vue){
        // 注册全局得组件
        this.foramtter(Vue, [
            icon,
        ]);

        return Vue;
    },
    foramtter(Vue, list){
        list.map( item => {
            Vue.component(item.name, item);
        });
    }
}