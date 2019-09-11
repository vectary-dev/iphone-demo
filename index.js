import { VctrApi } from "https://www.vectary.com/viewer-api/v1/api.js";
// import { animate, lerp } from "https://www.vectary.com/viewer-api/v1/apiUtils.js";

async function run() {
    console.log("Example script running..");

    function errHandler(err) {
        console.log("API error", err);
    }

    async function onReady() {
        console.log("API ready..");

        try {
            console.log(await vctrApi.getObjects());            
        } catch (e) {
            errHandler(e);
        }

    }
    const vctrApi = new VctrApi("d304867b-115f-45f2-9b47-902db7aeae92", errHandler);
    try {
        await vctrApi.init();
        onReady();
    } catch (e) {
        errHandler(e);
    }
}

run();