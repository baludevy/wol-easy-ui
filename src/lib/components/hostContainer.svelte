<script lang="ts">
	import { Api } from '$lib/api';
	import Power from '../icons/powerIcon.svelte';
	import Button from './button.svelte';
	import ComputerIcon from '../icons/computerIcon.svelte';

	export let hostName: string;
	export let hostId: string;
	export let hostIp: string;
	export let hostMac: string;
</script>

<div
	class="border-2 border-[#282828] rounded-xl w-[38rem] flex justify-between items-center mb-4 p-2"
>
	<div class="rounded-xl bg-base w-12 h-12 ml-2 flex justify-center items-center">
		<ComputerIcon />
	</div>

	<div class="flex-grow ml-4">
		<p>{hostName}</p>
		<p class="text-xs text-sub">{hostIp}</p>
	</div>

	<div class="flex justify-center items-center px-2 py-2">
		<Button onClick={() => Api.sendWolRequest(hostId)}>
			<Power />
		</Button>
	</div>

	<slot />
</div>
