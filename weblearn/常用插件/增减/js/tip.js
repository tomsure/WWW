    $(function () {
        $('.tip-container').click(function () {
            var tipcon = '<div class="tip-input">' +
                '<input type="text" class="house-tip" placeholder="房产标签">' +
                '<span class="del"></span>' +
                '</div>';
            $('.tip').prepend(tipcon);
            // 删除表单
            $('.del').click(function () {
                $(this).parent().remove();
            });
        });

    });
