<script lang="ts">
	export let onClick: () => void;
</script>

<button
	class="border-2 border-white bg-white text-black font-medium rounded-lg text-sm px-3.5 py-2.5"
	on:click={onClick}
>
	<slot />
</button>
