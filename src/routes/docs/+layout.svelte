<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppRail } from '@skeletonlabs/skeleton';
	import { AppRailTile } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';

	import Icon from '../../icons/icon.svelte';

	const storeValue = writable(1);
</script>

<AppShell>
	<svelte:fragment slot="header">hello</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
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
	<slot />
	<!-- ---- / ---- -->

	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
