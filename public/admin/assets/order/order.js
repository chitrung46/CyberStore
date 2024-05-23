$(function () {
    $(document).on("change", ".select-status", function (e) {
        e.preventDefault();
        let url = $(this).data("action");
        let data = {
            status: $(this).val(),
        };

        $.post(url, data, (res) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "success",
                showConfirmButton: false,
                timer: 1500,
            });
        });
    });
});
