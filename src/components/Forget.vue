<template>
    <div class="register-card-container">
        <div class="register-card">
            <div class="login-card-header">
                    <h1>个人健康管理平台 </h1>
                    <h5>You are so smart</h5>
                </div>
           
            <el-form ref="registerFormRef" :model="registerForm" class="register-card-form">
                <div class="form-item">
                        <span class="iconfont icon-denglu"></span>
                        <input type="text" v-model.trim="registerForm.username" placeholder="请输入用户名" required autofocus >
                    </div>
                    <!-- <div class="form-item">
                        <span class="iconfont icon-mima1"></span>
                        <input type="password" v-model.trim="registerForm.password" placeholder="请输入原密码" >
                    </div> -->
                    <div class="form-item">
                        <span class="iconfont icon-mima1"></span>
                        <input type="password" v-model.trim="registerForm.password" placeholder="请输入新密码" >
                    </div>
                    <div class="form-item">
                        <span class="iconfont icon-mima1"></span>
                        <input type="password" v-model.trim="registerForm.passwordAgain" placeholder="请再次输入新密码" >
                    </div>
                    <!-- <div class="form-item">
                        <span class="iconfont icon-youxiang"></span>
                        <input type="email" v-model.trim="registerForm.email" placeholder="请输入邮箱" >
                    </div> -->
            </el-form>
            <button type="submit" @click="submit">修改密码</button>
        </div>
    </div>
    </template>
    <script>
    import layer from 'layui-layer'
    
    export default{
        data(){
            return{
                registerForm:{
                    username:"",
                    password:"",
                    passwordAgain:"",
                    email:""
                },
                
    
                }
            },
            computed:{
                verify:function(){
                    
                   
                    if(!this.registerForm.username){
                        return {"flag":false,"msg":'用户名不能为空'}
                        
                    }
                    if(this.registerForm.username.length<5 || this.registerForm.username.length>11){
                        return {"flag":false,"msg":'用户名长度在 5 到 11 个字符'}
                    }
                    if(this.registerForm.password.length<6 || this.registerForm.password.length>15){
                        return {"flag":false,"msg":'密码长度在6-12个字符之间'};
                    }
                    if(this.registerForm.password!=this.registerForm.passwordAgain){
                        return {"flag":false,"msg":'两次输入的密码不一致'};
                    }
                    // if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(this.registerForm.email)){
                    //     return {"flag":false,"msg":'请填写有效的邮箱'};
                    // }
    
                    return {"flag":true,"msg":'ok'}
                    
                }
            },
            methods:{
                submit:function(){
                    if(!this.verify.flag){
                            layer.open({
                            content:this.verify.msg,
                            skin: 'msg',
                            time: 5000
                        }); 
                    }else{
                        this.$refs.registerFormRef.validate(async valid =>{
                            if(! valid) return;   //校验失败
                            const {data : res} =await this.$http.post("register",this.registerForm);  //访问后台
                            if( res == "success"){
                                this.$message.success("注册成功!");
                                this.$router.push({path:"/login"});
                            }else{
                                this.$message.error("注册失败!");
                            } 
                        });
                    }
                    
    
                        
                }
            }
        
        
    
    }
    </script>
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,200&display=swap');
    @import url(../assets/css/reset.css);
    
    .login-card-header{
        margin-top: 40px;
    }
    
    .register-card-container{
        font-family: 'Poppins',sans-serif;
        min-height: 100vh;
        background: linear-gradient(to right,#bf1bb4,#14d1bb);
        display: flex;
        align-items: center;
        justify-content: left;
        height: 100%;
        width: 100%;
        
    
    }
    .register-card{
        width: 450px;
        background: rgba(255, 255, 255, .5);
        border-radius: 10px;
        height: 600px;
        position: relative;
        margin-top: 60px;
        margin-left: 100px;
    
        
    }
    .register-card-form{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 80px;
    
    }
    .register-card-form .form-item{
        position: relative;
    }
    .form-item{
        width: 100%;
        margin-left: 85px;
        
        
    
    }
    .register-card-form .form-item .iconfont{
        position: absolute;
        top: .82rem;
        left: 1.4rem;
        font-size: 1.3rem;
        opacity: .4;
    }
    .register-card-form {
        display: flex;
        align-items: center;
        gap: 18px;
    
    }
    .register-card-form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: calc(1rem * .8);
        margin-bottom: .5rem;
    }
    .register-card input[type="Password"],
    .register-card input[type="text"],
    .register-card input[type='email']
    {
        border: none;
        outline: none;
        background: rgba(255, 255, 255, .5);
        padding: 1rem 3rem;
        margin-left: 0rem;
        border-radius: 10px;
        width: 80%;
    
    
    }
    .register-card input:focus{
        background: white;
    }
    .register-card button{
        background: black;
        color: white;
        padding: 1rem;
        width: 80%;
        margin-left: 2.8rem;
        /* margin: 2rem; */
        margin-top: 2rem;
        margin-bottom: 2rem;
        border-radius: 100px;
        text-transform: uppercase;
        letter-spacing: 2px;
    
    }
    .register-card button:hover{
        background-color: rgba(0,0,0, .85);
        cursor: pointer;
    }
    
    
    
    </style>