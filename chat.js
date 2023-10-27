document.querySelector("#message-box").addEventListener("keypress", (e) =>
{
    if (e.keyCode != 13) return;

    const message = document.querySelector("#message-box").value.trim();
    
    document.querySelector("#message-box").value = "";

    if (message != "")
    {
        const node = document.createElement("div");
        node.classList.add("msg-sent-container");

        const spacing = document.createElement("div");
        spacing.classList.add("spacing");

        const sent = document.createElement("div");
        sent.classList.add("msg-sent");
        sent.innerHTML = message;

        node.appendChild(spacing);
        node.appendChild(sent);

        document.querySelector("#messages-container").appendChild(node);
    }
})