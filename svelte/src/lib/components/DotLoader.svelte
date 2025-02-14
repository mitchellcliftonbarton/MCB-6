<div class="loader fill-parent flex justify-center items-center">
	<span></span>
</div>

<style>
	.loader {
		pointer-events: none;
	}

	.loader span {
		margin: 0 0.4rem;
		width: 0.3rem;
		height: 0.3rem;
		background-color: var(--black);
		display: inline-block;
	}

	.loader:before,
	.loader:after {
		content: '';
		margin: 0 0.4rem;
		width: 0.3rem;
		height: 0.3rem;
		background-color: var(--black);
		display: inline-block;
	}

	.loader:before {
		animation: fadeIn 0.6s 0.1s infinite;
	}

	.loader span {
		animation: fadeIn 0.6s 0.2s infinite;
	}

	.loader:after {
		animation: fadeIn 0.6s 0.3s infinite;
	}
</style>
