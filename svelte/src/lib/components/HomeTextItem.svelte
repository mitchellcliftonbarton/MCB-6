<script>
	import { PortableText } from '@portabletext/svelte';
	import { components } from '$lib/utils';

	// props
	export let item;

	const { columnCount, text } = item;

	const widthClass = columnCount !== '' ? `col-span-${columnCount}` : 'col-span-3';
</script>

<div class={`${widthClass} enter-in-1`}>
	<div class="sticky-block p-base border border-light-grey rich-text">
		<PortableText value={text} {components} />
	</div>
</div>
