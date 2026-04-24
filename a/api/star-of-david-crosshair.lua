local cfg = _G.StarConfig or {Mode = "Mouse", Pos = Vector2.new(400, 400), Size = 50, Width = 2, Hex = "#0038B8"}

local rs, uis = game:GetService("RunService"), game:GetService("UserInputService")
local lp, cam = game.Players.LocalPlayer, workspace.CurrentCamera
local v2, ud2 = Vector2.new, UDim2.new

local r, g, b = cfg.Hex:gsub("#",""):match("(..)(..)(..)")
local c = Color3.fromRGB(tonumber(r, 16), tonumber(g, 16), tonumber(b, 16))

local g = Instance.new("ScreenGui", lp:WaitForChild("PlayerGui"))
g.Name, g.IgnoreGuiInset = "StarGui", true

local lines = {}
for i = 1, 6 do
	local f = Instance.new("Frame", g)
	f.BorderSizePixel, f.BackgroundColor3, f.AnchorPoint = 0, c, v2(0.5, 0.5)
	lines[i] = f
end

local h = cfg.Size * 0.866
local rad = h / 3
local v = {
	v2(0, -rad * 2), v2(-cfg.Size / 2, rad), v2(cfg.Size / 2, rad),
	v2(0, rad * 2), v2(-cfg.Size / 2, -rad), v2(cfg.Size / 2, -rad)
}

local function draw(l, p1, p2)
	l.Size = ud2(0, (p1 - p2).Magnitude, 0, cfg.Width)
	l.Position = ud2(0, (p1.X + p2.X) / 2, 0, (p1.Y + p2.Y) / 2)
	l.Rotation = math.deg(math.atan2(p2.Y - p1.Y, p2.X - p1.X))
end

rs.RenderStepped:Connect(function()
	local gp = cfg.Pos
	
	if cfg.Mode == "Mouse" then
		gp = uis:GetMouseLocation()
	elseif cfg.Mode == "Center" then
		gp = cam.ViewportSize / 2
	end

	draw(lines[1], gp + v[1], gp + v[2])
	draw(lines[2], gp + v[2], gp + v[3])
	draw(lines[3], gp + v[3], gp + v[1])
	draw(lines[4], gp + v[4], gp + v[5])
	draw(lines[5], gp + v[5], gp + v[6])
	draw(lines[6], gp + v[6], gp + v[4])
end)
