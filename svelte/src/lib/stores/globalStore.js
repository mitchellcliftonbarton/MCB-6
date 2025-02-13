import { readable, writable } from 'svelte/store';

export const defaultItemsPerPage = readable(36);

export const searchActive = writable(false);

export const isLargeQuery = writable(false);
