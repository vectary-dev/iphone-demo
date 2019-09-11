import { VctrApi } from "https://www.vectary.com/viewer-api/v1/api.js";

async function run() {
    console.log("Example script running..");

    function errHandler(err) {
        console.log("API error", err);
    }

    async function onReady() {
        console.log("API ready..");

        try {
            console.log(await vctrApi.getObjects());
            const backMaterial = await vctrApi.getMaterialByName("Object material 6");
            const logoMaterial = await vctrApi.getMaterialByName("Object material 15");
            const lensBodyMaterial = await vctrApi.getMaterialByName("Object material 16");
            const ringsLensMaterial = await vctrApi.getMaterialByName("Object material 19");
            const metalBodyMaterial = await vctrApi.getMaterialByName("Object material 1");
            const plasticBodyMaterial = await vctrApi.getMaterialByName("PlasticMaterial");
            const buttonsMaterial = await vctrApi.getMaterialByName("ButtonsMaterial");

            const bodyPartsMaterials = [
                backMaterial,
                logoMaterial,
                lensBodyMaterial,
                ringsLensMaterial,
                metalBodyMaterial,
                plasticBodyMaterial,
                buttonsMaterial
            ];

            const grayProp = {
                "color": "#52514f"
            };
            const silverProp = {
                "color": "#ebebe3"
            };
            const greenProp = {
                "color": "#6d7a71"
            };
            const goldProp = {
                "color": "#fbd7bd"
            };

            const changePhoneColor = (materials, materialColor) => {
                materials.forEach(material => {
                    vctrApi.updateMaterial(material.name, materialColor);
                });
            }

            document.getElementById("gray").addEventListener("click", () => {
                changePhoneColor(bodyPartsMaterials, grayProp);
            });
            document.getElementById("silver").addEventListener("click", () => {
                changePhoneColor(bodyPartsMaterials, silverProp);                
            });
            document.getElementById("green").addEventListener("click", () => {
                changePhoneColor(bodyPartsMaterials, greenProp);
            });
            document.getElementById("gold").addEventListener("click", () => {
                changePhoneColor(bodyPartsMaterials, goldProp);
            });

        } catch (e) {
            errHandler(e);
        }

    }
    const vctrApi = new VctrApi("57a5fab8-053a-4f72-8486-01b3d849d9af", errHandler);
    try {
        await vctrApi.init();
        onReady();
    } catch (e) {
        errHandler(e);
    }
}

run();