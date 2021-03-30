<template>
  <main>
    <div class="container">
      <form class="form" @submit.prevent="submit()">
        <div class="form-stepper">
          <span class="form-step">Доставка</span>
          <img src="@/assets/el.svg" alt="" />
          <span>Оплата</span>
        </div>
        <div class="form-title">Информация для доставки</div>
        <div class="form-desc">Получатель</div>
        <input
          v-model="$v.event.name.$model"
          placeholder="ФИО"
          type="text"
          class="form-field"
					:class="{ 'form-field--error': $v.event.name.$error }"

        />
        <div class="form-desc">Адрес</div>
        <input
					v-model="$v.event.city.$model"
					:class="{ 'form-field--error': $v.event.city.$error }"
          placeholder="Город"
          type="text"
          class="form-field"

        />
        <input
					v-model="$v.event.address.$model"
					:class="{ 'form-field--error': $v.event.address.$error }"
          placeholder="Адрес"
          type="text"
          class="form-field"

        />

        <div class="form-wrapper">
          <div class="form-select">
            <select
							v-model="$v.event.country.$model"
							:class="{ 'form-field--error': $v.event.country.$error }"
              class="form-field form-field-country"

            >
              <option value="" disabled selected>Страна</option>
              <option
                v-for="option in countries"
                :value="option"
                :key="option"
                :selected="option === event.country"
              >
                {{ option }}
              </option>
            </select>
          </div>
          <div>
            <input
							v-model="$v.event.index.$model"
							:class="{ 'form-field--error': $v.event.index.$error }"
              placeholder="Индекс"
              type="tel"
              class="form-field form-field-index"
							v-mask="'######'"

            />
          </div>
        </div>

        <button
					class="form-btn"
					type="submit"
					:disabled="submitStatus === 'OK'"
				>Продолжить</button>
      </form>
    </div>
  </main>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: "FormStepOne",
  data() {
    return {
      countries: ["Moscow", "Kiev", "Dubai", "New Your"],
      event: {
        country: "",
        name: "",
        index: "",
        address: "",
        city: "",
			},
			submitStatus: null
    };
	},
  validations: {
    event: {
      name: {
				required,
				maxLength: maxLength(30),
			},
      city: {
				required,
				maxLength: maxLength(30),
			},
      address: {
				required,
				maxLength: maxLength(30),
			},
			country: {
				required
			},
      index: {
				required,
				maxLength: maxLength(6),
				minLength: minLength(6)
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
				return this.$router.push({ path: "/step-two" });
      }
    },
  },
};
</script>

<style>
</style>
