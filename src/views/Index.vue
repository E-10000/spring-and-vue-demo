<template>
    <div>
asdasd
        <el-table
                :data="tableData"
                border
                style="width: 40%">
            <el-table-column
                    fixed
                    prop="id"
                    label="ID"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="author"
                    label="作者"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                page-size="2"
                @current-change="page">
        </el-pagination>

    </div>
</template>

<script>
    export default {
        name: "Index",
        methods: {
            handleClick(row) {
                this.$router.push({
                    path: '/editbook',
                    query:{
                        id: row.id,
                        name: row.name,
                        author: row.author
                    }
                })
            },
            deleteClick(row){
                var that=this;
                axios.delete('http://localhost:8081/book/'+row.id).then(function (response) {
                    console.log(response)
                })
            },
            //当被点击页数的时候，跳转
            page(currPage){
                var that=this;
                axios.get('http://localhost:8081/book/limit/'+(currPage-1)*2+'/2').then(function (response) {
                    that.tableData=response.data;
                })
            }
        },
        //被创建的时候，显示第一页
        created() {
            var that=this;
            axios.get('http://localhost:8081/book/limit/0/2').then(function (response) {
                //给数据
                that.tableData=response.data;
                // console.log(response.data)
            }),
                axios.get('http://localhost:8081/book/all').then(function (response) {
                    //获得总长度
                    that.total=response.data.length ;
                })
        },
        data() {
            return {
                total: 10,
                tableData: [{
                    id: 1,
                    name: '书名',
                    author: '作者'
                }]
            }
        }
    }
</script>

<style scoped>

</style>