<template>
    <dv-scroll-board :config="config" style="width:48rem;height:36rem" />
</template>

<script>
export default {
    data() {
        return {
            config: {
                header: ['【类型】', '预警企业', '监控点数', '预警时间'],
                data: [
                    ['<span style="color:red;font-weight:bold;font-size:1rem">【离岗】</span>', '<span style="color:red;font-weight:bold;font-size:1rem">中电运行</span>', 
                    '<span style="color:red;font-weight:bold;font-size:1rem">岗位001</span>', '<span style="color:red;font-weight:bold;font-size:1rem">06-13 10:20</span>'],
                    ['<span style="color:green; font-weight:bold;font-size:1rem">【异物】</span>', '<span style="color:green; font-weight:bold;font-size:1rem">文信时空</span>', 
                    '<span style="color:green; font-weight:bold;font-size:1rem">岗位003</span>', '<span style="color:green; font-weight:bold;font-size:1rem">06-13 10:20</span>'],
                    ['<span style="color:#fff682;font-weight:bold;font-size:1rem">【偏转】</span>', '<span style="color:#fff682;font-weight:bold;font-size:1rem">石化集团</span>', 
                        '<span style="color:#fff682;font-weight:bold;font-size:1rem">岗位008</span>', '<span style="color:#fff682;font-weight:bold;font-size:1rem">06-13 10:20</span>'],
                    ['<span style="color:white;font-weight:bold;font-size:1rem">【规范】</span>', '<span style="color:white;font-weight:bold;font-size:1rem">陕煤集团</span>', 
                    '<span style="color:white;font-weight:bold;font-size:1rem">岗位004</span>', '<span style="color:white;font-weight:bold;font-size:1rem">06-13 10:20</span>'],
                    ['<span style="color:red;font-weight:bold;font-size:1rem">【离岗】</span>', '<span style="color:red;font-weight:bold;font-size:1rem">中电运行</span>', 
                    '<span style="color:red;font-weight:bold;font-size:1rem">岗位004</span>', '<span style="color:red;font-weight:bold;font-size:1rem">06-13 10:20</span>'],
                    ['<span style="color:green; font-weight:bold;font-size:1rem">【异物】</span>', '<span style="color:green; font-weight:bold;font-size:1rem">文信时空</span>', 
                    '<span style="color:green; font-weight:bold;font-size:1rem">岗位005</span>', '<span style="color:green; font-weight:bold;font-size:1rem">06-13 10:20</span>'],
                    ['<span style="color:#fff682;font-weight:bold;font-size:1rem">【偏转】</span>', '<span style="color:#fff682;font-weight:bold;font-size:1rem">陕煤集团</span>', 
                        '<span style="color:#fff682;font-weight:bold;font-size:1rem">岗位001</span>', '<span style="color:#fff682;font-weight:bold;font-size:1rem">06-13 10:20</span>'],
                    ['<span style="color:white;font-weight:bold;font-size:1rem">【规范】</span>', '<span style="color:white;font-weight:bold;font-size:1rem">文信时空</span>', 
                    '<span style="color:white;font-weight:bold;font-size:1rem">岗位007</span>', '<span style="color:white;font-weight:bold;font-size:1rem">06-13 10:20</span>'],
                    ['<span style="color:#fff682;font-weight:bold;font-size:1rem">【偏转】</span>', '<span style="color:#fff682;font-weight:bold;font-size:1rem">石化集团</span>', 
                    '<span style="color:#fff682;font-weight:bold;font-size:1rem">岗位006</span>', '<span style="color:#fff682;font-weight:bold;font-size:1rem">06-13 10:20</span>'],
                    ['<span style="color:green; font-weight:bold;font-size:1rem">【异物】</span>', '<span style="color:green; font-weight:bold;font-size:1rem">中电运行</span>', 
                    '<span style="color:green; font-weight:bold;font-size:1rem">岗位002</span>', '<span style="color:green; font-weight:bold;font-size:1rem">06-13 10:20</span>']
                ],
                columnWidth: [80],
                headerHeight: 30,
                headerBGC:'black',
                align: ['center'],
                rowNum: 8
            }

        }

    }
}
</script>

<style scoped></style>