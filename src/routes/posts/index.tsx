import PocketBase from 'pocketbase';
import { For } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

type Post = {
    id: string;
    title: string;
}

export function routeData() {
    const posts = createServerData$(async ()=> {
        const pb = new PocketBase("http://127.0.0.1:8090");
        const data = await pb.collection("posts").getList<Post>(1, 50);

        return data.items;
    } );

    return { posts };
}

export default function Index () {
    const { posts } = useRouteData<typeof routeData>();

    return (
      <ul>
        <For each={posts()}>
          {(post) => (
            <li>
              {post?.title}
            </li>
          )}
        </For>
      </ul>
    );
}
