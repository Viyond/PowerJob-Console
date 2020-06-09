import enLocale from 'element-ui/lib/locale/lang/en'

const en = {
    message: {

        'save': 'save',
        'cancel': 'cancel',
        'refresh': 'refresh',
        'query': 'query',
        'reset': 'reset',
        'keyword': 'keyword',
        'run': 'run',
        'edit': 'edit',
        'delete': 'delete',

        'tabHome': 'Home',
        'tabJobManage': 'JobManage',
        'tabJobInstance': 'JobInstance',
        'tabWorkflowManage': 'WorkflowManage',
        'tabWfInstance': 'WorkflowInstance',
        'tabContainerOps': 'ContainerOps',
        'tabTemplate': 'TemplateGenerator',
        'tabContainerManager': 'ContainerManager',

        'omsServerTime': 'oms-server time',
        'localBrowserTime': 'local browser time',
        'githubURL': 'GitHub Repo',
        'docURL': 'document address',
        'totalJobNum': 'total job Num',
        'runningInstanceNum': 'running instance num',
        'recentFailedInstanceNum': 'recent failed instance Num',
        'workerNum': 'worker cluster size',
        'workerAddress': 'worker address',
        'cpuLoad': 'CPU Load',
        'memoryLoad': 'Memory Load',
        'diskLoad': 'Disk Load',

        // 任务管理
        'jobId': 'JobID',
        'instanceId': 'InstanceID',
        'jobName': 'JobName',
        'scheduleInfo': 'ScheduleInfo',
        'executeType': 'ExecuteType',
        'processorType': 'ProcessorType',
        'status': 'status',
        'operation': 'operation',
        'newJob': 'New Job',
        'jobDescription': 'JobDescription',
        'jobParams': 'JobParams',
        'timeExpressionType': 'TimeExpressionType',
        'timeExpressionPlaceHolder': 'cron expression or number(millions) for fix_rate/fix_delay job',
        'executeConfig': 'ExecuteConfig',
        'javaProcessorInfoPLH': 'classname, eg: com.github.kfcfans.DemoProcessor',
        'containerProcessorInfoPLH': 'containerID#classname, eg: 1#com.github.kfcfans.DemoProcessor',
        'shellProcessorInfoPLH': 'shell script',
        'pythonProcessorInfoPLH': 'python script',
        'runtimeConfig': 'RuntimeCfg',
        'maxInstanceNum': 'MaxInstanceNum',
        'threadConcurrency': 'ThreadConcurrency',
        'timeout': 'TimeLimit',
        'retryConfig': 'RetryConfig',
        'taskRetryTimes': 'TaskRetryTimes',
        'subTaskRetryTimes': "SubTaskRetryTimes",
        'workerConfig': 'Worker',
        'minCPU': 'MinAvailableCPUCores',
        'minMemory': 'MinMemory(GB)',
        'minDisk': 'MinDisk(GB)',
        'clusterConfig': 'ClusterConfig',
        'designatedWorkerAddress': 'DesignatedWorkerAddress',
        'designatedWorkerAddressPLH': 'empty for all worker or IP:Port,IP:Port ...',
        'maxWorkerNum': 'MaxWorkerNum',
        'maxWorkerNumPLH': '0 means no limit',
        'alarmConfig': 'AlarmConfig',
        'alarmSelectorPLH': 'select alarm recipient ',
        'standalone': 'Standalone',
        'broadcast': 'Broadcast',
        'map': 'MAP',
        'mapReduce': 'MapReduce',
        'fixRate': 'Fix Rate (ms)',
        'fixDelay': 'Fix Delay (ms)',
        'workflow': 'workflow',
    },
    ...enLocale
};

export default en
