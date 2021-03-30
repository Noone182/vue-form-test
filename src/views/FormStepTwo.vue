<template>
  <main>
		<div class="container">
			<form @submit.prevent="submit()" class="form">
				<div class="form-stepper">
					<span >Доставка</span>
					<img src="@/assets/el.svg" alt="">
					<span class="form-step">Оплата</span>
				</div>
				<div class="form-title">
					Оплата
				</div>
				<div class="form-desc">Имя на карте</div>
				<input
					v-model="$v.card.name.$model"
					:class="{ 'form-field--error': $v.card.name.$error }"
					placeholder="Konstantin Ivanov"
					type="text"
					class="form-field"  />

				<div class="form-desc">Номер карты</div>
				<input
					v-model="$v.card.number.$model"
					:class="{ 'form-field--error': $v.card.number.$error }"
					placeholder="XXXX XXXX XXXX XXXX XXXX"
					v-mask="'#### #### #### #### ####'"
					type="tel"
					class="form-field"  />
				<div class="form-wrapper">
						<div>
							<div class="form-desc form-desc-two">Срок</div>
								<input
									v-model="$v.card.date.$model"
									:class="{ 'form-field--error': $v.card.date.$error }"
									placeholder="MM / YY"
									v-mask="'## / ##'"
									type="tel"
									class="form-field form-field-date"
								/>
						</div>
						<div>
							<div class="form-desc form-desc-two">CVV</div>
								<input
									v-model="$v.card.cvv.$model"
									:class="{ 'form-field--error': $v.card.cvv.$error }"
									type="password"
									class="form-field form-field-cvv"
									v-mask="'###'"
									/>
						</div>

				</div>

				<button
					class="form-btn"
					type="submit"
					:disabled="submitStatus === 'OK'"
				>
					Оплатить
				</button>
			</form>
		</div>

  </main>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'FormStepTwo',
	data () {
    return {
      card: {
        name: '',
        date: '',
				cvv: '',
				number: ''

			},
			submitStatus: null
    }
	},
  validations: {
    card: {
      name: {
				required,
				alpha: val => /^[a-zA-Z]*$/i.test(val),
				maxLength: maxLength(30),
				minLength: minLength(5)
			},
      date: {
				required,
				maxLength: maxLength(7),
				minLength: minLength(7)
			},
      number: {
				required,
				maxLength: maxLength(24),
				minLength: minLength(24)
			},
      cvv: {
				required,
				maxLength: maxLength(3),
				minLength: minLength(3)
			},
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
				this.submitStatus = "OK";
				return this.$router.push({ path: "/thanks" });
      }
		}
	},
}
</script>

<style>
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
</style>
