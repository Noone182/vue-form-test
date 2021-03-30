<template>
  <div id="app">
		<Header />
		<keep-alive>
			<router-view>
				<FormStepOne/>
			</router-view>
		</keep-alive>


  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import FormStepOne from '@/views/FormStepOne.vue';

export default {
  name: 'App',
  components: {
		Header,
		FormStepOne
  }
}
</script>

<style lang="scss">
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
	font-weight: normal;
}
#app {
  box-sizing: border-box;
	padding: 0;
  margin: 0;
}
main {
		background: #F6F8FF;
 }
.container {
	padding: 150px 0;
}


 .form {
		width: 400px;
		height: 450px;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		border-radius: 24px;
		background: #FFFFFF;
		padding: 20px 40px 60px 40px;
		&-field {
			width: 320px;
			height: 40px;
			border-radius: 5px;
			border: 1px solid #DEDCDC;
			color: #6B6B6B;
			padding-left: 15px;
			font-weight: 300;
			margin: 10px auto 0 auto;
			&-country {
				width: 180px;
				margin-right: 20px;
			}
			&-index {
				width: 120px;
			}
			&-cvv, &-date {
				width: 95px;
			}
			&-date {
				margin-right: 30px;
			}
			&-error {
				border: 1px solid red;
			}
		}
		&-btn {
		background: rgba(25, 165, 39, 0.8);
		width: 180px;
		height: 50px;
		color: #FFFFFF;
		font-weight: 600;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 30px;
		margin-left: 35px;
		display: flex;
		text-decoration: none;
		text-align: center;
		justify-content: center;
		align-items: center;

		}
		&-title {
			margin: 33px auto 0 auto;
			font-size: 26px;
			color: #101D94;
			font-weight: 300;
		}
		&-desc {
			color: #101D94;
			font-weight: 300;
			margin: 30px 0 0 35px;
			&-two {
				margin-left: 0;
			}
		}
		&-wrapper {
			display: flex;
			align-items: center;
			margin-left: 30px;
		}
		&-thanks {
			font-size: 26px;
			line-height: 31px;
			text-align: center;
			margin-top: 10px;
		}
		&-img {
			width: 52px;
			height: 52px;
			margin: 214px auto 0 auto;
		}
		&-stepper {
			display: flex;
			align-items: center;
			font-size: 12px;
			margin-left: 20px;
			span {
				margin-left: 15px;
				margin-right: 15px;
			}
		}
		&-step {
			color: #101D94;
		}
		input[type=number]::-webkit-inner-spin-button,
		input[type=number]::-webkit-outer-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
		input[type="number"] {
			-moz-appearance: textfield;
		}
		input[type="number"]:hover,
		input[type="number"]:focus {
			-moz-appearance: number-input;
		}
		.form-field--error:invalid {
			border: 1px solid red;
		}
		.form-field--error:valid {
			border: 1px solid red;
		}
 }
</style>
