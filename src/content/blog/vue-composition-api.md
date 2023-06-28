---
title: "探索Vue3 Composition API"
excerpt: "Some description"
publishDate: "2023-04-07"
# image: "https://images.unsplash.com/photo-1501747315-124a0eaca060?auto=format&fit=crop&w=987&h=987"
category: "technology"
author: "mrayi"
tags: [vue3, 源码]
---
### 什么是组合式 API

组合式 API (Composition API) 是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue 组件。

- 选项式 API

```vue
<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  method: {
    toggleLoading() {
      this.loading = !this.loading;
    },
  },
};
</script>
```

- 组合式 API

```vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const loading = ref(false);

    const toggleLoading = () => (loading.value = !loading.value);

    return {
      loading,
      toggleLoading,
    };
  },
};
</script>
```

### 组合式 API 的优点

#### 更好的逻辑复用

组合式 API 最基本的优势是它使我们能够通过组合函数来实现更加简洁高效的逻辑复用。在选项式 API 中我们主要的逻辑复用机制是 mixins，而组合式 API 解决了 mixins 的所有缺陷。

- 更灵活的代码组织
- 更好的类型推导
- 更小的生产包体积
- 可以独立于 vue 组件使用

### 与 vue2 mixin 对比

mixin 存在的问题

1. 命名冲突：Mixin 会将所有的属性和方法都混合到组件中，如果不小心重名了，就会导致意想不到的错误。
2. 代码重用：Mixin 虽然可以重用代码，但是往往会导致代码的耦合度增加，降低代码的可维护性。
