import axios from "axios";
import FetchStacks from "./fetchStacks";

let done = false;
let start = true;

export default async function mainUpdate() {
    let { state, nodeID } = await FetchStacks();





    if (state === false && done === true) {
        done = false;

        await axios.post(
            'https://discord.com/api/webhooks/857717510652690463/XFInJ2SRP3_0OYSggar-TKxEe1VxGcNUy4OWWdVfaD8FsiUxhFpywh4oMcoXNPRxn5o8',
            {
                content: `**__ROVOLUTION SERVER OUTAGE__**
    Rovolution Discord Bot on the Node \`node-${nodeID}\` has failed starting new node.

    We apiologies for the brief downtime.
    *Rovolution Damage Control*
            `,
            },
        );
    }

    if (state === true && done === false) {
        if (start !== true) {
            await axios.post(
                'https://discord.com/api/webhooks/857717510652690463/XFInJ2SRP3_0OYSggar-TKxEe1VxGcNUy4OWWdVfaD8FsiUxhFpywh4oMcoXNPRxn5o8',
                {
                    content: `**__ROVOLUTION SERVER OUTAGE OVER__**
    Rovolution Discord Bot has successfully started on Node \`node-${nodeID}\`. And service has resumed as usual.

    We apiologies for the brief downtime.
    *Rovolution Damage Control*
            `,
                },
            );
        }
        start = false;
    }

    if (state === true) {
        done = true;
    }
}