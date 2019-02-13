<template>
    <el-transfer
        v-model="yesData"
        :props="{key: 'id',label: 'name'}"
        :titles="['未关联', '已关联']"
        @change="handleChange"
        :data="noData"
    ></el-transfer>
</template>
<script>
export default {
    data() {
        return {
            noData: [{id:1,name:'测试1'},{id:2,name:'测试2'},{id:3,name:'测试3'}],
            yesData: [1,3]
        }
    },
    methods:{
        handleChange(value, direction, movedKeys) {
            console.log(value, direction, movedKeys);
             if(direction === "right") {
                
             }
             if(direction === "left") {
                
             }
                
        }
    }
}
</script>

<style scoped>

</style>
