<template>
	<div class="content__layout">
		<section class="promo">
			<div class="wrapper">
				<div class="promo__inner">
					<div class="w-full px-4 max-[1375px]:px-2">
						<div class="promo__item">
							<div class="promo__item-inner">
								<div class="promo__title">
									Выполни все условия и получи <strong>50.00 ₽</strong> на баланс за репост!
								</div>
								<ul class="promo__steps">
									<li v-for="(item, index) in steps" :key="index">
										<img :src="require('@/assets/images/' + item.status + '.svg')" alt="" />
										<div v-html="item.content"></div>
									</li>
								</ul>
								<div class="promo__buttons">
									<button class="btn btn--yellow" type="button">Обновить</button>
								</div>
							</div>
							<img
								src="@/assets/images/coins.png"
								class="absolute max-[725px]:hidden max-[1575px]:top-[10%] max-[1575px]:-translate-y-0 z-[1] right-[5%] top-1/2 -translate-y-1/2"
								alt=""
							/>
							<div
								class="promo__background-image"
								:style="{
									'background-image': 'url(' + require('@/assets/images/repost.png') + ')',
								}"
							></div>
						</div>
					</div>
					<div class="w-2/3 px-4 max-[1375px]:px-2 max-[1375px]:w-full">
						<div class="promo__item">
							<div class="promo__item-inner">
								<div class="promo__wheel">
									<div class="promo__wheel-ctx">
										<img src="@/assets/images/badge.svg" class="promo__wheel-cursor" alt="" />
										<div class="promo__wheel-ctx-container">
											<button class="promo__wheel-ctx-play" type="button">Крутить</button>
										</div>
										<div
											class="promo__wheel-ctx-img"
											:style="{
												'background-image': 'url(' + require('@/assets/images/wheel.png') + ')',
											}"
										></div>
									</div>
									<div class="promo__wheel-info">
										<div class="promo__wheel-text">
											<b>Крути рулетку и получай бонусы!</b>
											<p>Раз в 15 минут крути рулетку и получай до 3.00 ₽ на баланс!</p>
											<label>Вращай колесо без ограничений каждый день!</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="w-1/3 px-4 max-[1375px]:min-[1024px]:w-1/2 max-[1024px]:min-[0px]:w-full max-[1375px]:px-2"
					>
						<div class="promo__item !bg-[#35aee2]">
							<div class="promo__item-inner">
								<div class="flex flex-col">
									<div class="promo__title">
										Подпишись на наш телеграм-канал и получи
										<strong class="!text-[#ffe801]">50.00 ₽</strong> на баланс!
									</div>
									<p>
										Будь одним из первых, кто получит свежий промокод, узнает о новых бонусах и
										нововведениях!
									</p>
								</div>
								<div class="promo__buttons">
									<button class="btn btn--yellow" type="button">Получить</button>
								</div>
							</div>
							<img
								src="@/assets/images/tg.svg"
								class="absolute left-0 bottom-0 opacity-80"
								alt=""
							/>
						</div>
					</div>
					<div class="w-1/2 px-4 max-[1375px]:px-2 max-[1024px]:min-[0px]:w-full">
						<div class="promo__item">
							<div class="promo__item-inner">
								<div class="flex flex-col">
									<div class="promo__title">
										Вступи в группу и получи <br />
										<strong>5.00 ₽</strong> на баланс!
									</div>
									<p>
										Вступи в нашу группу ВКонтакте и получи моментальный бонус на свой баланс!
										Профиль ВКонтакте должен быть публичным, иначе мы не сможем проверить наличие
										подписки.
									</p>
								</div>
								<div class="promo__buttons">
									<button class="btn btn--yellow" type="button">Перейти в группу</button>
								</div>
							</div>
							<img
								src="@/assets/images/group.svg"
								class="absolute top-1/2 -translate-y-1/2 right-0 bottom-0 opacity-90"
								alt=""
							/>
						</div>
					</div>
					<div class="w-1/2 max-[1375px]:w-full px-4 max-[1375px]:px-2">
						<div class="promo__item">
							<div class="promo__item-inner">
								<div class="flex flex-col">
									<div class="promo__title">
										Напиши сообщение нашему <br />
										сообществу и получи <strong>5.00 ₽</strong> на баланс!
									</div>
									<p>
										Отправь любое сообщение в нашу группу ВКонтакте, тем самым разрешив присылать
										уведомления. Приятный сюрприз - периодически мы будем присылать информацию об
										акциях и различных бонусах!
									</p>
								</div>
								<div class="promo__buttons">
									<button class="btn btn--yellow" type="button">Написать сообщение</button>
								</div>
							</div>
							<img
								src="@/assets/images/subscribe.svg"
								class="absolute top-1/2 -translate-y-1/2 right-0 bottom-0 opacity-40"
								alt=""
							/>
						</div>
					</div>
					<div class="w-1/2 px-4 max-[1375px]:px-2 max-[1375px]:w-full max-[1375px]:order-[1]">
						<div class="promo__item">
							<div class="promo__item-inner">
								<div class="flex flex-col">
									<div class="promo__title">Рефералы</div>
									<p>Приглашай друзей и зарабатывай 40% от выгоды казино!</p>
									<div class="promo__steps-refferal">
										<div class="promo__step-refferal" data-step="1">
											<img src="@/assets/images/link.svg" alt="" />
											<span>Скопируй ссылку</span>
										</div>
										<div class="promo__step-refferal" data-step="2">
											<img src="@/assets/images/user.svg" alt="" />
											<span>Пригласи друга</span>
										</div>
										<div class="promo__step-refferal" data-step="3">
											<img src="@/assets/images/money.svg" alt="" />
											<span>Получи бонус</span>
										</div>
									</div>
								</div>
								<div class="promo__buttons">
									<router-link to="/partner" class="btn btn--yellow"
										>Партнерская программа</router-link
									>
								</div>
							</div>
							<div
								class="promo__background-image"
								:style="{
									'background-image': 'url(' + require('@/assets/images/partner.png') + ')',
								}"
							></div>
						</div>
					</div>
					<div
						class="w-1/2 px-4 max-[1375px]:px-2 flex flex-col max-[1375px]:w-full max-[1375px]:min-[1024px]:flex-row justify-between gap-8 max-[1375px]:gap-4"
					>
						<div class="promo__item min-[1375px]:shrink-0 min-[1375px]:!h-auto">
							<div class="promo__item-inner">
								<div class="flex flex-col">
									<div class="promo__title">
										Оставь отзыв о проекте в нашей группе и получи
										<strong>бонус к депозиту</strong> до 20%!
									</div>
									<p>
										Оставляй отзывы в нашей группе ВКонтакте, после проверки модератором и
										публикации бонус будет автоматически активирован на аккаунте.
									</p>
								</div>
								<div class="promo__buttons">
									<router-link to="/partner" class="btn btn--yellow">Оставить отзыв</router-link>
								</div>
							</div>
							<img
								src="@/assets/images/review.svg"
								class="absolute top-1/2 -translate-y-1/2 right-0 bottom-0 opacity-40"
								alt=""
							/>
						</div>
						<div class="promo__item">
							<div class="promo__item-inner">
								<div class="flex flex-col">
									<div class="promo__title">Ранги</div>
									<p>Зарабатывая ранги ты будешь получать увеличенный кэшбэк с каждого выигрыша.</p>
								</div>
								<div class="promo__buttons">
									<router-link to="/loyalty" class="btn btn--yellow"
										>Программа лояльности</router-link
									>
								</div>
							</div>
							<div
								class="promo__background-image"
								:style="{
									'background-image': 'url(' + require('@/assets/images/loyalty.png') + ')',
								}"
							></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Footer />
	</div>
</template>

<script>
export default {
	data() {
		return {
			steps: [
				{
					status: 'success',
					content: '<strong>Привяжи</strong> к профилю аккаунт ВКонтакте.',
				},
				{
					status: 'error',
					content: '<strong>Вступи</strong> в нашу группу ВКонтакте.',
				},
				{
					status: 'error',
					content: '<strong>Напиши сообщение</strong> нашему сообществу.',
				},
				{
					status: 'error',
					content:
						'<strong>Сделай</strong> <a href="javascript:;">репост записи на свою страницу.</a>',
				},
				{
					status: 'info',
					content:
						'Ваша страница ВКонтакте должна быть публичной, иначе мы не сможем проверить наличие репоста.',
				},
				{
					status: 'info',
					content:
						'При удалении поста ранее, чем через 2 недели после репоста сумма бонуса будет вычтена с баланса.',
				},
			],
		}
	},
	components: {
		Footer: () => import('@/components/layout/Footer/Footer.vue'),
	},
}
</script>
