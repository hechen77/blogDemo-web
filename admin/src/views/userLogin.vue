<template>
	<div class="userLoginPageView">
		<div class="userLoginContentView">
			<div class="userLoginContent">
				<h3 class="userLoginContentTitle">{{ webTitle }}</h3>
				<el-form>
					<el-form-item>
						<el-input v-model="userInfo.userPhone"
						          clearable
						          placeholder="请输入手机号">
							<i slot="prefix"
							   class="el-input__icon el-icon-user-solid"></i>
						</el-input>
					</el-form-item>
					<el-form-item>
						<el-input v-model="userInfo.password" placeholder="请输入密码"
						          :show-password="true"
						          clearable><i
							slot="prefix" class="el-input__icon el-icon-lock"></i></el-input>
					</el-form-item>
					<el-button type="primary" style="width: 100% !important;margin-bottom: 20px"
					           :disabled="loginBtnDisable" @click="userLogin">
						登录
					</el-button>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import {adminUserLoginAPI} from "@/http/http"
import {userInfoName, userTokenName, webTitle} from "@/utils/config";
import {localStorage} from "@/utils/storage";
import {Message} from "element-ui";

export default {
	data() {
		return {
			userInfo: {
				userPhone: "",
				password: ""
			},
			loginBtnDisable: false,
			webTitle: webTitle
		}
	},
	methods: {
		async userLogin() {
			this.loginBtnDisable = true;
			const data = await adminUserLoginAPI(this.userInfo);
			if (data && data.success) {
				Message({
					message: data.message,
					type: "success"
				})
				const localInfo = {
					userName: data.data.userName,
					userPhone: data.data.userPhone,
					identity: data.data.identity
				}
				localStorage.set(userInfoName, JSON.stringify(localInfo))
				this.$store.commit("userInfo/SET_USERINFO", localInfo)
				localStorage.set(userTokenName, data.token)
				setTimeout(() => {
					this.$router.push("/")
				}, 500)
			}
			this.loginBtnDisable = false
		}
	}
}
</script>

<style scoped lang="less">
.userLoginPageView {
	width: 100%;
	height: 100%;
	
	.userLoginContentView {
		width: 100%;
		height: 100%;
		background: url("http://authserver.hbsi.edu.cn/authserver/custom/images/login-bg-autumn.jpg") no-repeat;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		
		.userLoginContent {
			background-color: #ffffff91;
			backdrop-filter: blur(1px);
			padding: 25px 25px 5px 25px;
			text-align: center;
			border-radius: 6px;
			min-width: 360px;
			
			.userLoginContentTitle {
				margin: 0 auto 30px auto;
				color: #ffffff;
				font-weight: 500;
				line-height: 1.1;
				font-size: 22px;
				letter-spacing: 2px;
			}
		}
	}
}
</style>