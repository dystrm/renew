function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// playlist
$(document).on("click", ".playlist_btn", function () {
    $("#playlistContainer").load("modal.html #playlistModal", function () {
        $("#playlistContainer").addClass("show");
        $("body").addClass("scroll-lock");
    });
});

$(document).on("click", ".main_btn.ico_click", function () {
    if (isMobileDevice()) {
        // 모바일인 경우
        $("#oneclickMOContainer").load("modal.html #oneclickMOModal", function () {
            $("#oneclickMOContainer").addClass("show");
            $("body").addClass("scroll-lock");
        });
    } else {
        // PC인 경우
        $("#oneclickPCContainer").load("modal.html #oneclickPCModal", function () {
            $("#oneclickPCContainer").addClass("show");
            $("body").addClass("scroll-lock");
        });
    }
});

$(document).on("click", ".oneclick_btn", function () {
    if (isMobileDevice()) {
        // 모바일인 경우
        $("#oneclickMOContainer").load("modal.html #oneclickMOModal", function () {
            $("#oneclickMOContainer").addClass("show");
            $("body").addClass("scroll-lock");
        });
    } else {
        // PC인 경우
        $("#oneclickPCContainer").load("modal.html #oneclickPCModal", function () {
            $("#oneclickPCContainer").addClass("show");
            $("body").addClass("scroll-lock");
        });
    }
});

// modal close
$(document).on("click", ".modal_close_btn", function () {
    $(".modal").removeClass("show").empty();
    $("body").removeClass("scroll-lock");
});

const now = new Date();
const formatted = `${now.getFullYear()}.${(now.getMonth()+1).toString().padStart(2, '0')}.${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
document.addEventListener("DOMContentLoaded", () => {
    const el = document.querySelector('.footer_wrapper p:last-child');
    if (el) el.textContent = 'Last Update : ' + formatted;
});