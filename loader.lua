local P, H = game.PlaceId, "https://www.esoteric.win/api/v1/rbf/"
local M = {[17625359962]="rivals",[893973440]="flee",[286090429]="arsenal",[2753915549]="bloxfruits",[4442272183]="bloxfruits",[7449423635]="bloxfruits",[11424731604]="bloxfruits",[15335232591]="bloxfruits",[10594246664]="bloxfruits",[994732206]="bloxfruits",[6403373529]="slap-battles",[142823291]="murder-mystery-2",[3956818381]="ninja-legends",[3101667897]="legends-of-speed",[9872472334]="evade",[6961824067]="ftap",[7326934954]="99-nights-in-the-forest"}
local MB = loadstring(game:HttpGet("https://raw.githubusercontent.com/xHeptc/NotificationGUI/main/source.lua"))()
local function Show(d, i, b, c) MB.Show({Position=UDim2.new(0.5,0,0.5,0), Text="esoteric.win", Description=d, MessageBoxIcon=i or "Warning", MessageBoxButtons=b or "OK", Result=c}) end
local function Load(u)
    Show("Loading, please don't click yes again")
    local s, r = pcall(game.HttpGet, game, u)
    if s and #r > 0 then
        local f = loadstring(r)
        if f then local s2, e = pcall(f) if not s2 then Show("Error: "..e, "Error") end
        else Show("Parse Error", "Error") end
    else Show("Fetch Error", "Error") end
end
local function Scan()
    if M[P] then Show("Found: "..M[P]:upper().."\nLoad?", "Question", "YesNo", function(r) if r=="Yes" then Load(H..M[P]) end end)
    else Show("Unsupported Game\nesoteric.win/discord") end
end
Show("Load Universal GUI? Click No If You'd Like To Scan For A Supported Game!", "Question", "YesNo", function(r) if r=="Yes" then Load(H.."universal") else Scan() end end)
