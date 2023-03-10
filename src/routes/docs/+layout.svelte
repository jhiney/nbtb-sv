<script>
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	import { AppRail } from '@skeletonlabs/skeleton';
	import { AppRailTile } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';

	import Icon from '../../icons/icon.svelte';

	const storeValue = writable(1);
</script>

<AppShell>
	<svelte:fragment slot="header"><AppBar class="text-3xl text-white font-mono" background="bg-tbp">Nothing Beats the Bell</AppBar></svelte:fragment>
	
	<svelte:fragment slot="sidebarLeft"
		><AppRail selected={storeValue}>
			<svelte:fragment slot="lead" />
			<AppRailTile label="Tile 1" value={1} />
			<AppRailTile label="Tile 2" value={2}>
				<Icon icon="bell" />
			</AppRailTile>
			<AppRailTile label="Tile 3" value={3}>
				<i class="fa-solid fa-image text-2xl" />
			</AppRailTile>
			<svelte:fragment slot="trail">
				<AppRailTile label="Tile footer" value={4}>
					<i class="fa-solid fa-image text-2xl" />
				</AppRailTile>
			</svelte:fragment>
		</AppRail></svelte:fragment
	>
	<!-- Router Slot -->
	<div class="bg-gradient-to-b from-tbp to-purple-600 h-screen">
		<slot />
	</div>
	<!-- ---- / ---- -->

	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
