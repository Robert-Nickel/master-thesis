<script lang="ts">
    import { browser } from "$app/env";
    import { base } from "$app/paths";
    import workerSrc from "pdfjs-dist/build/pdf.worker.min.js?url";
    import { Document, Page, PDFJS, preferThisWidth } from "svelte-pdfjs";
    if (PDFJS.GlobalWorkerOptions) {
        // A CDN-hosted worker is already available by default
        // but you can specify a custom worker script URL.
        // Also see https://vitejs.dev/guide/assets.html#explicit-url-imports
        PDFJS.GlobalWorkerOptions.workerSrc = workerSrc;
    }
    let scale = 1;
    let num = 1;
    let filename = "./report.pdf";
    let max_pages = 1;
    let renderTextLayer = false;
    let rotation = 0;
    let show = false;
    let w = 0;
</script>

{#if browser}
    <!-- {base}/ isn't neceassary if your app lives at the root of your host. 
	---- However we're serving this demo through github pages so the pdfs will
	---- be at /svelte-pdfjs/filename.pdf
	-->
    <div class="flex-container" bind:clientWidth={w}>
        <Document
            file="{base}/{filename}"
            loadOptions={{ docBaseUrl: base }}
            on:loadsuccess={(e) => {
                max_pages = e.detail.numPages;
                num = Math.min(num, max_pages);
                show = true;
            }}
            on:loaderror={(e) => alert(e.detail + "")}
        >
            <div class="preview">
                <Page
                    {scale}
                    {num}
                    {renderTextLayer}
                    {rotation}
                    getViewport={w >= 800
                        ? preferThisWidth(w / 2.4)
                        : preferThisWidth(w)}
                />
            </div>

            {#if show}
                <div class="interaction">
                    <div style="display: flex;">
                        <button
                            class="outline nav-button"
                            disabled={num == 1}
                            on:click={() => num--}>Prev</button
                        >
                        <button
                            style="margin-left: 1em;"
                            class="outline nav-button"
                            disabled={num == max_pages}
                            on:click={() => num++}>Next</button
                        >
                    </div>

                    <a
                        href="https://robertnickel.online/master-thesis/report.pdf"
                        download="thesis_robert_nickel"
                    >
                        <button class="view-pdf-button">Download</button></a
                    ><br />
                </div>
            {/if}
        </Document>
    </div>
{/if}
{#if show}
    <article style="margin-bottom:0; text-align:center;">
        <a href="https://lightbulb-learning.io">Try Lightbulb Learning</a><br />
        <a href="https://github.com/Lightbulb-Learning/lightbulb-learning"
            >Lightbulb Learning on GitHub</a
        ><br />
        <p>© Robert Nickel 2022</p>
    </article>
{/if}

<style>
    .flex-container {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 800px) {
        .flex-container {
            flex-direction: column;
        }
    }

    .preview {
        width: 100%;
        flex: 50%;
        margin: auto;
        margin-top: 2em;
    }

    @media (min-width: 800px) {
        .preview {
            margin-left: 20%;
        }
    }

    .interaction {
        padding-top: 2em;
        place-items: center;
        flex: 50%;
        margin: auto;
    }

    @media (min-width: 800px) {
        .interaction {
            margin-top: 20em;
            margin-left: 2em;
        }
    }

    .nav-button {
        width: 5em;
    }
    @media (max-width: 800px) {
        .nav-button {
            width: 8em;
        }
    }
    .view-pdf-button {
        width: 11em;
    }

    @media (max-width: 800px) {
        .view-pdf-button {
            width: 17em;
        }
    }
</style>
