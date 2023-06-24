<template>
    <div class="login-card-container">
        <div class="login-card">
            <div class="login-card-logo">
                <img src="../assets/logo.jpg">
            </div>
            <div class="login-card-header">
                <h1>个人健康管理平台 </h1>
                <div>personal health management platform</div>
            </div>
            <el-form ref="loginFormRef" class="login-card-form"  :model="loginForm">
                <div class="form-item">
                    <span class="form-item-icon material-symbols-rounded">mail</span>
                    <input type="text" v-model.trim="loginForm.username" placeholder="请输入用户名" required autofocus>
                </div>
                <div class="form-item">
                    <span class="form-item-icon material-symbols-rounded">lock</span>
                    <input type="password" v-model.trim="loginForm.password" placeholder="请输入密码" >
                </div>

                <div class="form-item-other">
                    <div class="checkbox">
                        <input type="checkbox" id="remeberMeCheckbox">
                        <label for="remeberMeCheckbox">记住我</label>
                    </div>
                    <a @click="doForget">忘记密码</a>
                </div>
            </el-form>
            <button type="submit" @click="login">登录</button>
            <div class="login-card-footer">
                还没有账号?<a @click="doRegister">注册</a>.
            </div>
    </div>
    
</div>
</template>
<script>
import layer from 'layui-layer'


export default{
    data(){
        return{
            loginForm:{
            username:"admin",
            password:"123456"
            },
        }
        
    },
    computed:{
            verify:function(){
                
               
                if(!this.loginForm.username){
                    return {"flag":false,"msg":'用户名不能为空'}
                    
                }
                if(this.loginForm.username.length<5 ||this.loginForm.username.length>11){
                    return {"flag":false,"msg":'用户名长度在 5 到 11 个字符'}

                }


                if(this.loginForm.password.length<6 ||this.loginForm.password.length>8){
                    return {"flag":false,"msg":'密码长度在6-12个字符之间'};
                }
                return {"flag":true,"msg":'ok'}
            }
        },
    methods:{
        login(){
            if(!this.verify.flag){
                        layer.open({
                        content:this.verify.msg,
                        skin: 'msg',
                        time: 5000
                    }); 
                }else{
            this.$refs.loginFormRef.validate(async valid =>{
            if( !valid) return;  //验证失败
            const {data:res} = await this.$http.post("login",this.loginForm);  //访问后台
            console.log(res.user.username)
            if( res.flag == "ok"){
                window.sessionStorage.setItem('username',res.user.username); // session 放置
                window.sessionStorage.setItem('flag',res.flag);
                this.$message.success("操作成功!!!");
                this.$router.push({path:"/home"});
            }else{
                this.$message.error("操作失败!!!")

            }
           });
        }
        },
        doRegister(){
            this.$router.push({path:"/register"})
        },
        doForget(){
            this.$router.push({path: "/forget"})
        }

    }

}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);
@import url(../assets/css/style.css);

</style>
