<template>
	<footer class="footer">
		<div class="wrapper">
			<div class="footer__content">
				<div class="footer__left">
					<div class="footer__copyright">Copyright © 2019 - 2023 Friends. All rights reserved.</div>
					<ul class="footer__socials">
						<li>
							<a href="javascript:;" target="_blank">
								<svg class="icon"><use xlink:href="icons.svg#icon-vk"></use></svg>
								<span>@official_frc</span>
							</a>
						</li>
						<li>
							<a href="javascript:;" target="_blank">
								<svg class="icon"><use xlink:href="icons.svg#icon-telegram"></use></svg>
								<span>@friends_casino_off</span>
							</a>
						</li>
						<li>
							<a href="javascript:;" target="_blank">
								<svg class="icon"><use xlink:href="icons.svg#icon-envelope"></use></svg>
								<span>support@friends-casino.com</span>
							</a>
						</li>
					</ul>
					<ul class="footer__links">
						<li>
							<router-link to="/responsibility" active-class="active" exact-active-class="active"
								>Responsible Gaming Policy</router-link
							>
						</li>
						<li>
							<router-link to="/tos" active-class="active" exact-active-class="active"
								>Terms and Conditions</router-link
							>
						</li>
						<li>
							<router-link to="/privacy" active-class="active" exact-active-class="active"
								>Privacy policy</router-link
							>
						</li>
						<li>
							<router-link to="/aml" active-class="active" exact-active-class="active"
								>AML</router-link
							>
						</li>
						<li>5.24</li>
					</ul>
				</div>
				<div class="footer__right">
					<div class="footer__name">Selector Group N.V., Abraham de Veerstraat 9, Curacao</div>
					<div class="footer__logos">
						<Language />
						<router-link to="/" class="footer__logotype">
							<img src="@/assets/images/logotype.svg" alt="" />
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {}
	},
	components: {
		Language: () => import('./Language.vue'),
	},
}
</script>
