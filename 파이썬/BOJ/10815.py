import sys
from bisect import bisect_left, bisect_right

N = int(sys.stdin.readline())
card_sangguen = list(map(int,sys.stdin.readline().split()))
M = int(sys.stdin.readline())
card_all = list(map(int,sys.stdin.readline().split()))

card_sangguen.sort()

def cnt_within_range (arr, left_v, right_v):
    # 맨 좌측 인덱스
    left_idx = bisect_left(arr, left_v)
    # 맨 우측 인덱스
    right_idx = bisect_right(arr, right_v)
    return right_idx - left_idx

for card in card_all:
    if cnt_within_range(card_sangguen, card, card):
        print(1)
    else:
        print(0)

