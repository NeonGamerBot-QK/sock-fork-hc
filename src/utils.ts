import type { App } from "@slack/bolt";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export function ago(date: Date) {
  return timeAgo.format(date);
}

export function capitaliseFirstLetter(str: string) {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}
// mem cache 
export let username_cache:any = {}

export async function getUsername(id: string, app: App):Promise<string> {
return username_cache[id] ? username_cache[id] : username_cache[id] = await app.client.users.info({ user: id }).then((userInfo:any)=>userInfo.user.profile.real_name || userInfo.user.name) 
}