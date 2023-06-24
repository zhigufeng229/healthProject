<template>
<div>
        <!-- 卡片视图区 -->
        <el-card>
      <el-row :gutter="25">
        <el-col :span="10">
          <!-- 搜索添加 -->
          <el-input placeholder="请输入搜索内容" v-model="queryInfo.query" clearable @clear="getCaloriesList">
            <el-button slot="append" icon="el-icon-search" @click="getCaloriesList"></el-button>
          </el-input>
        </el-col>

        <el-col :span="4" >
          <el-button type="primary" @click="addDialogVisible = true">添加卡路里</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表 -->
      <el-table :data="caloriesList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="食品名称" prop="foodname"></el-table-column>
        <el-table-column label="热量" prop="calories"></el-table-column>
        <el-table-column label="类别" prop="kind"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- 修改 -->
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.id)"></el-button>
            <!-- 删除 -->
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteUser(scope.row.id)"></el-button>
            <!-- 权限
            <el-tooltip effect="dark" content="分配权限" placement="top-start" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip> -->
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pageNum"
        :page-sizes="[1, 2, 5, 100]"
        :page-size="queryInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>

    <!-- 创建新用户对话框 -->
    <el-dialog title="添加新卡路里" :visible.sync="addDialogVisible" width="30%"
    @close="addDialogClosed">
      <!-- 内容主体区域 -->
      <el-form :model="addForm" :rules="addFormRules"
        ref="addFormRef" label-width="100px">
        <!-- 用户名 -->
        <el-form-item label=" 食物名称" prop="foodname">
          <el-input v-model="addForm.foodname"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="热量" prop="calories">
          <el-input v-model="addForm.calories"></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label="食物类别" prop="kind">
          <el-input v-model="addForm.kind"></el-input>
        </el-form-item>
      </el-form>
      <!-- 内容底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCalories">确 定</el-button>
      </span>
    </el-dialog>

     <!-- 修改用户对话框 -->
     <el-dialog title="修改用户信息" :visible.sync="editDialogVisible" width="50%" @colse="editDialogClosed">
       <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
        <!-- 用户名 -->
        <el-form-item label="食物名称" prop="foodname">
          <el-input v-model="editForm.foodname" disabled></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="热量" prop="calories">
          <el-input v-model="editForm.calories"></el-input>
        </el-form-item>
        <!-- 邮箱 -->
        <el-form-item label="食物类别" prop="kind">
          <el-input v-model="editForm.kind"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editCaloriesInfo">确 定</el-button>
      </span>
    </el-dialog>

</div>
</template>

<script>
export default{
    data(){
        return{
        // 请求数据
        queryInfo: {
        query: "",
        pageNum: 1,
        pageSize: 5
      },
      addForm:{
        foodname:'',
        calories:'',
        kind:'',
      },
      editForm:{
        foodname:'',
        calories:'',
        kind:'',
      },
      caloriesList:[],
      total: 0, // 最大数据记录
      addDialogVisible: false ,// 对话框显示
       // 控制修改用户对话框显示/隐藏
       editDialogVisible:false,
      // 修改用户信息
      editForm:{},
      // 验证规则
      addFormRules:{
        foodname:[
           { required: true, message: "请输入食物名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        calories:[
           { required: true, message: "请输入热量", trigger: "blur" },
        ],
        kind:[
           { required: true, message: "请输入食物类别", trigger: "blur" },
        ],
      },
      // 修改卡路里表单验证规则
      editFormRules:{
          calories:[
          { required: true, message: "请输入热量", trigger: "blur" },
          ],
          kind:[
          { required: true, message: "请输入食物类别", trigger: "blur" },
          ],
      },

        }
    },
    created(){
      this.getCaloriesList();

    },
    methods:{
        async getCaloriesList(){
           // 调用post请求
           const { data: res } = await this.$http.get("caloriesList", {
          params: this.queryInfo
      });
      this.caloriesList = res.data; // 将返回数据赋值
      this.total = res.numbers; // 总个数

      },
    // 监听pageSize改变的事件
    handleSizeChange(newSize) {
      this.queryInfo.pageSize = newSize;
      this.getCaloriesList(); // 数据发生改变重新申请数据
    },
    // 监听pageNum改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pageNum = newPage;
      this.getCaloriesList(); // 数据发生改变重新申请数据
    },
    // 修改用户状态
    async userStateChanged(userinfo) {
      const { data: res } = await this.$http.put(
        `userState?id=${userinfo.id}&state=${userinfo.state}`
      );
      if (res != "success") {
        userinfo.state = !userinfo.state;
        return this.$message.error("操作失败！！！");
      }
      this.$message.success("操作成功！！！");
    },
    // 监听添加用户
    addDialogClosed(){
      this.$refs.addFormRef.resetFields();// 重置表单项
    },
    // 添加用户
    addCalories(){
        this.$refs.addFormRef.validate(async valid =>{
        console.log(valid);
        if( !valid ) return;
        // 发起请求
        const {data:res} = await this.$http.post("addCalories",this.addForm);
        if (res != "success") {
        return this.$message.error("操作失败！！！");
        }
        this.$message.success("操作成功！！！");
        //隐藏
        this.addDialogVisible = false;
        this.getCaloriesList();
      })
    },
    // 展示修改框
    async showEditDialog(id){
       
        const {data:res} = await this.$http.get("getCaloriesUpdate?id="+id);
        // if (res != "success") {
        // userinfo.state = !userinfo.state;
        // return this.$message.error("操作失败！！！");
        // }
        // this.$message.success("操作成功！！！");

        this.editForm = res;
        this.editDialogVisible = true;
    },
    // 关闭窗口
    editDialogClosed(){
      this.$refs.editFormRef.resetFields();
    },
    // 确认修改
    editCaloriesInfo(){
      this.$refs.editFormRef.validate(async valid =>{
        console.log(valid);
        if( !valid ) return;
        // 发起请求
        const {data:res} = await this.$http.put("editCalories",this.editForm);
        console.log(res);
         if (res != "success") return this.$message.error("操作失败！！！");
        this.$message.success("操作成功！！！");
        //隐藏
        this.editDialogVisible = false;
        this.getCaloriesList();
      });
    },
    // 删除按钮
    async deleteCalories(id){
      // 弹框
      const confirmResult = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).catch(err => err)
      // 成功删除为confirm 取消为 cancel
      if(confirmResult!='confirm'){
        return this.$message.info("已取消删除");
      }
      const {data:res} = await this.$http.delete("deleteCalories?id="+id);
      if (res != "success") {
        return this.$message.error("操作失败！！！");
      }
      this.$message.success("操作成功！！！");
      this.getCaloriesList();
    },

    }

}
</script>

<style>

</style>