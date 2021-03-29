<template>
  <main>
		<div class="container">
			<form class="form" @submit.prevent="submit()">
				<div class="form-stepper">
					<span class="form-step">Доставка</span>
					<img src="@/assets/el.svg" alt="">
					<span>Оплата</span>
				</div>
				<div class="form-title">
					Информация для доставки
				</div>
				<div class="form-desc">Получатель</div>
				<input
					v-model="event.name"
					placeholder="ФИО"
					type="text"
					class="form-field"
					required
					/>
				<div class="form-desc">Адрес</div>
				<input
					v-model="event.city"
					placeholder="Город"
					type="text"
					class="form-field"
					required
					/>
				<input
					v-model="event.address"
					placeholder="Адрес"
					type="text"
					class="form-field"
					required
					/>

				<div class="form-wrapper">
					<div class="form-select">
						<select
							v-model="event.country"
							class="form-field form-field-country"
							required
							>
							<option value="" disabled selected>Страна</option>
							<option

								v-for="option in countries"
								:value="option"
								:key="option"
								:selected="option === event.country"
							>{{ option }}</option>
						</select>
					</div>
					<div>
						<input
						v-model="event.index"
						placeholder="Индекс"
						type="number"
						class="form-field form-field-index"
						required
						/>
					</div>
				</div>

				<button
					class="form-btn"
					type="submit"
				>
				Продолжить
				</button>
			</form>

		</div>


  </main>
</template>

<script>

export default {
  name: 'FormStepOne',
	data () {
    return {
      countries: [
        'Moscow',
        'Kiev',
        'Dubai',
        'New Your'
      ],
      event: {
        country: '',
        name: '',
				index: '',
				address: '',
				city: ''

      }
    }
	},

	methods: {
		submit() {
				return this.$router.push({ path: '/step-two' })

    }
	}
}
</script>

<style>

</style>
