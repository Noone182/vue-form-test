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
					v-model="card.name"
					placeholder="Konstantin Ivanov"
					type="text"
					class="form-field" required />

				<div class="form-desc">Номер карты</div>
				<input
					v-model="card.number"
					placeholder="XXXX XXXX XXXX XXXX XXXX"
					type="number"
					class="form-field" required />
				<div class="form-wrapper">
						<div>
							<div class="form-desc form-desc-two">Срок</div>
								<input
									v-model="card.date"
									placeholder="MM / YY"
									type="number"
									class="form-field form-field-date"
									required />
						</div>
						<div>
							<div class="form-desc form-desc-two">CVV</div>
								<input
									v-model="card.cvv"
									type="password"
									class="form-field form-field-cvv"
									required
									/>
						</div>

				</div>

				<button
					class="form-btn"
					type="submit"
				>
					Оплатить
				</button>
			</form>
		</div>

  </main>
</template>

<script>

export default {
  name: 'FormStepTwo',
	data () {
    return {
      card: {
        name: '',
        date: '',
				cvv: '',
				number: ''

      }
    }
	},
	methods: {
		submit() {
				return this.$router.push({ path: '/thanks' })
    }
	}
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
