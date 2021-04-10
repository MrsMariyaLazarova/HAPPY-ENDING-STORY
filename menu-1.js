let addMenu = $("#navbarNavDropdown > ul >li.dropdown"),
    addMenuList = addMenu.children("ul"),
    menuItems = $("#navbarNavDropdown > ul > li:visible:not('.dropdown')");

function _resize() {
    var itemsWidth = 0,
        startWrap = false,
        navWidth = $("#navbarNavDropdown").width() - addMenu.width();
    menuItems.each(function() {
        if (startWrap == false) {
            if (itemsWidth + $(this).width() < navWidth) {
                itemsWidth += $(this).width();
            } else {
                startWrap = true;
                addMenuList.prepend(this);
            }
        } else {
            addMenuList.prepend(this);
        }
    });
}
window.onresize = _resize;
