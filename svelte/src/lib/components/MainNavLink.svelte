<script>
	import { page } from '$app/stores';

	// props
	export let link;

	function isActive(path) {
		if (link.path === '/wip') {
			return path.includes(link.path);
		}

		return path === link.path;
	}

	// check if active
	$: active = isActive($page.url.pathname);
</script>

<a href={link.path} class:active>
	{link.name}
</a>
