<template>
	<div class="help__item">
		<div class="help__caption">
			{{ data.caption.text }}
			<span v-if="data.caption.badge">{{ data.caption.badge }}</span>
		</div>
		<div class="help__collapse">
			<div
				class="help__collapse-item"
				v-for="(item, index) in data.items"
				:key="index"
				@click="accordeon"
			>
				<div class="help__collapse-top">
					<span>{{ item.title }}</span>
					<svg class="icon"><use xlink:href="icons.svg#icon-down"></use></svg>
				</div>
				<div class="help__collapse-bottom">
					<p>
						Friends - онлайн-казино с международной лицензий и именем. Мы предлагаем более 6000 игр
						в каталоге, широкую линейку спортивных событий, а так же множество мини-игр.
						Поддерживаем множество платежных систем и большинство популярных криптовалют.
					</p>
					<ul>
						<li>
							<strong>Бонус №1</strong> <br />
							Бонус за вступление в наше сообщество ВКонтакте. Вы получите 5 RUB. на счет после
							привязки аккаунта ВКонтакте и вступления в наше сообщество.
						</li>
						<li>
							<strong>Бонус №2</strong> <br />
							Бонус за отправку сообщения нашему сообществу. Вы получите 5 RUB. на счет после
							отправке сообщения нашему сообществу.
						</li>
						<li>
							<strong>Бонус №3 - Промокоды</strong> <br />
							Бонус за репост. Вы получите 50 RUB. на счет после того, как сделаете репост
							закрепленной записи из нашего сообщества на свою страницу.
						</li>
						<li>
							<strong>Бонус №4 - Пригласи друга</strong> <br />
							Колесо фортуны. Вы можете получать до 3 RUB. каждые 15 минут за вращение колеса
							фортуны.
						</li>
					</ul>
					<p>
						Чтобы пополнить баланс нажмите на кнопку
						<router-link to="/wallet">Кошелек</router-link> в правом верхнем углу сайта. Выберите
						удобный для Вас способ оплаты, введите сумму пополнения и нажмите «Перейти к оплате».
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		data: {
			type: Object,
			default: null,
		},
	},
	methods: {
		accordeon(event) {
			if (event.target.parentElement.classList.contains('active')) {
				event.target.parentElement.classList.remove('active')
			} else {
				event.target.parentElement.classList.add('active')
			}
		},
	},
}
</script>
