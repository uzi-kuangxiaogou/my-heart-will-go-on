/**
 * Created by admin on 2016/8/10.
 */
$(function () {
    $(".float-menu>ul>li").mouseenter(function () {
        $(this).find(".a-d").stop().animate({"top":"-55"},500);//������li��a��ǩ�Ϸ�

    }) ;
    $(".float-menu>ul>li").mouseleave(function () {
        $(this).find(".a-d").stop().animate({"top":"0"},500);//����뿪ʱ�ص�ԭ��λ��

    });
    $(".float-menu .fl").mouseover(function () {//�����������li,dl��ȱ�300ͬʱ���󻬶�
        $('.float-box>dl').stop().animate({"right":"5","width":"300"},500);
    });
    $(".float-menu .fl").mouseout(function () {

        $('.float-box>dl').stop().animate({"right":"-57","top":"0","width":"50"},500);

    });
    $(".float-box>dl>dt").click(function () {
        $(".fl").off("mouseout");//�������뿪�¼�
        $(this).addClass("current").siblings("dt").removeClass("current");
        return false;//ȡ���¼�ð��
    });
    $(document).click(function(){
        $('.float-box>dl').stop().animate({"right":"-50","width":"50"},1000);//���ҳ��ʱdl�ָ�λ��
        $(".fl").mouseout(function () {//�ָ�����뿪�¼�
            $('.float-box>dl').stop().animate({"right":"-50","width":"50"},1000);
        });
    });
    //$('.float-menu dt').click(function(){
    //
    //    var a = $(this).index();
    //    if($('.float-info').eq(a).find('.float-line').length >= 4){
    //        $('.float-info').eq(a).find('.float-move').css('display','block')
    //    }else if($('.float-info').eq(a).find('.float-line').length == 0){
    //        $('.float-info').eq(a).find('.float-no').css('display','block')
    //    }
    //});
});