Workflow test { 
    Param 
    (    
        [Parameter(Mandatory = $true)][ValidateNotNullOrEmpty()] 
        [String] 
        $ResourceGroupName, 
        [Parameter(Mandatory = $true)][ValidateNotNullOrEmpty()] 
        [String] 
        $AzureVMList = "All", 
        [Parameter(Mandatory = $true)][ValidateSet("Start", "Stop")] 
        [String] 
        $Action 
    ) 
    
    Disable-AzContextAutosave -Scope Process

    $azureContext = (Connect-AzAccount -Identity).context
    $azureContext = Set-AzContext -SubscriptionName $azureContext.Subscription -DefaultProfile $azureContext
    $resourceGroup = Get-AzResourceGroup -Name $ResourceGroupName -ErrorAction SilentlyContinue

    if (-Not $resourceGroup) {
        throw "Resource Group does not exist: $ResourceGroupName." 
    }
		
    if ($AzureVMList -ne "All") {
        $azureVMs = $AzureVMList.Split(",") 
        [System.Collections.ArrayList]$azureVMs = $azureVMs 
    } 
    else {				
        $azureVMs = (Get-AzVM -ResourceGroupName $resourceGroup.Name).Name 
        [System.Collections.ArrayList]$azureVMs = $azureVMs 
    } 
 
    foreach ($azureVM in $azureVMs) { 
        if (-Not (Get-AzVM | Where-Object { $_.Name -eq $azureVM })) { 
            throw "VM does not exist: $azureVM." 
        } 
    } 
 
    if ($Action -eq "Stop") { 
        Write-Output "Stopping VMs..."

        foreach -parallel ($azureVM in $azureVMs) { 
            Get-AzVM | Where-Object { $_.Name -eq $azureVM } | Stop-AzVM -Force 
        } 
    } 
    else { 
        Write-Output "Starting VMs..."

        foreach -parallel ($azureVM in $azureVMs) { 
            Get-AzVM | Where-Object { $_.Name -eq $azureVM } | Start-AzVM 
        } 
    } 
}