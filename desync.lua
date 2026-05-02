local StarterGui = game:GetService("StarterGui")
local CoreGui = game:GetService("CoreGui") 

local Toggled = false

local function notify(title, text)
    pcall(function()
        StarterGui:SetCore("SendNotification", {
            Title = title;
            Text = text;
            Duration = 2;
        })
    end)
end

local function rakhook(packet)
    if packet.PacketId == 0x1B then
        local data = packet.AsBuffer
        buffer.writeu32(data, 1, 0xFFFFFFFF)
        packet:SetData(data)
    end
end

local ScreenGui = Instance.new("ScreenGui")
local ToggleButton = Instance.new("TextButton")

ScreenGui.Name = "DesyncGui"
ScreenGui.Parent = CoreGui
ScreenGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling

ToggleButton.Name = "ToggleButton"
ToggleButton.Parent = ScreenGui
ToggleButton.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
ToggleButton.AnchorPoint = Vector2.new(1, 1)
ToggleButton.Position = UDim2.new(1, 0, 1, 0) 
ToggleButton.Size = UDim2.new(0, 100, 0, 50)
ToggleButton.Font = Enum.Font.SourceSansBold
ToggleButton.Text = "Desync: OFF"
ToggleButton.TextColor3 = Color3.fromRGB(255, 255, 255)
ToggleButton.TextSize = 14
ToggleButton.Draggable = false

ToggleButton.MouseButton1Click:Connect(function()
    Toggled = not Toggled
    
    if Toggled then
        notify("Desync", "ENABLED")
        raknet.add_send_hook(rakhook)
        ToggleButton.Text = "Desync: ON"
        ToggleButton.BackgroundColor3 = Color3.fromRGB(0, 150, 0) 
    else
        notify("Desync", "DISABLED")
        raknet.remove_send_hook(rakhook)
        ToggleButton.Text = "Desync: OFF"
        ToggleButton.BackgroundColor3 = Color3.fromRGB(150, 0, 0) 
    end
end)
